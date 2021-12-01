# check_cnpj
Projeto que retorna informações de um cnpj

Projeto que consome o endpoint de cnpj do brasilAPI, feito em python, flask utilizando padrão mvc e ajax, totalmente responsivo.

É nescessario adicionar um arquivo .env na raiz do projeto e configurar com uma variavel: SECRET_KEY = '(SUA KEY)'
utilize o pip install -r requirements.txt para instalar todas as dependencias.
Então na raiz do projeto no shell utilize: "python run.py" para subir o servidor.
app com o modo debug ativado, para desativar vá no arquivo run.py e na linha 4 altere o app.run(debug=True) para app.run(debug=False)
