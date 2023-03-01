import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useState } from 'react'
import { validateInput } from '../components/validateInput'
import { DisplayCompanyInfo } from '../components/DisplayCompanyInfo'
import { DisplayError } from '../components/DisplayError'
import { SaveFile } from '../components/SaveFile'
import { DisplayPlaceHolder } from '../components/DisplayPlaceHolder'
import { Footer } from '../components/Footer'
import { SpinLoader } from '../components/SpinLoader'
import { Header } from '../components/Header'


const Home: NextPage = () => {

  const [inputValue, setInputValue] = useState('')
  const [wasSearched, setWasSearched] = useState(false)
  const [isFetchResultOk, setIsFetchResultOk] = useState(true)
  const [isFetching, setIsFetching] = useState(false)
  const [data, setData] = useState<any>({})

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    let newInputValue = e.target.value.replaceAll(".", "")
    newInputValue = newInputValue.replaceAll("/", "")
    newInputValue = newInputValue.replaceAll("-", "")
    setInputValue(newInputValue)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (validateInput.test(inputValue)) {
      setIsFetching(true)
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}${inputValue}`)
      .then(res => res.json())
      .then(data => {
        if (data.name === 'NotFoundError' || data.name === 'BadRequestError') {
          setIsFetchResultOk(false)
          setIsFetching(false)
        } else {
          setIsFetchResultOk(true)
          setWasSearched(true)

          if (data.opcao_pelo_simples === true) {
            data.opcao_pelo_simples = 'SIM'
          }

          setIsFetching(false)
          setData(data)
        }
      })
      .catch(error => {
        console.log('ERROR >>>>>>', error)
      })
    } else {
      alert('Valor invalido')
    }
    
  }
  
  return (
    <div className="flex flex-col min-h-[100vh] bg-[#33415c]">
      <Head>
        <title>
          Obtenha informações completas de impresas apartir do cnpj!
        </title>
      </Head>
      <Header />
      <div className="w-[100%] h-[120px] flex items-end justify-center">
        <form
          className="flex flex-wrap gap-3 justify-center"
          onSubmit={handleSubmit}
        >
          <input
            onChange={handleInput}
            value={inputValue}
            required
            className="w-[300px] h-[40px] rounded text-2xl p-2"
            type="text"
            placeholder="Digite o CNPJ"
            maxLength={18}
            minLength={14}
          />
          <button className="w-[200px] h-[40px] bg-[#3581e4] rounded text-xl hover:bg-[#5c9cf0] hover:text-white">
            Buscar
          </button>
        </form>
      </div>
      {isFetching ? (
        <SpinLoader />
      ) : isFetchResultOk ? (
        wasSearched ? (
          <div className="flex flex-col items-center">
            <DisplayCompanyInfo {...data} /> <SaveFile {...data} />
          </div>
        ) : (
          <DisplayPlaceHolder />
        )
      ) : (
        <DisplayError />
      )}
      <Footer />
    </div>
  );
}

export default Home
