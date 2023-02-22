import { Info } from "./Info";


export const DisplayCompanyInfo = (props: any) => {
    return (
      <div className="flex flex-wrap flex-col gap-3 text-white p-10">
        <div className="flex flex-wrap gap-3">
          <Info title={'CNPJ'} value={props.cnpj} />
          <Info title={'Nome Fantasia'} value={props.nome_fantasia} />
          <Info title={'Razão Social'} value={props.razao_social} />
          <Info title={'Tipo'} value={props.descricao_identificador_matriz_filial} />
        </div>

        <div className="flex flex-wrap gap-3">
          <Info title={'Situação Cadastral'} value={props.descricao_situacao_cadastral} />
          <Info title={'Inicio das Atividades'} value={props.data_inicio_atividade} />
          <Info title={'Data Situação Cadastral'} value={props.data_situacao_cadastral} />
          <Info title={'Capital Social'} value={`R$ ${props.capital_social}`} />
        </div>

        <div className="flex flex-wrap gap-3">
          <Info title={'Porte'} value={props.porte} />
          <Info title={'Natureza Jurídica'} value={props.natureza_juridica} />
          <Info title={'Empresa MEI'} value={props.opcao_pelo_simples} />
        </div>

        <div className="flex flex-wrap gap-3">
          <Info title={'Logradouro'} value={props.logradouro} />
          <Info title={'Número'} value={props.numero} />
          <Info title={'Município'} value={props.municipio} />
          <Info title={'Bairro'} value={props.bairro} />
          <Info title={'UF'} value={props.uf} />
          <Info title={'CEP'} value={props.cep} />
        </div>

        <div className="flex flex-wrap gap-3">
          <Info title={'Telefone'} value={props.ddd_telefone_1} />
        </div>

      </div>
    );
}

{/* <Info title={''} value={} /> */}