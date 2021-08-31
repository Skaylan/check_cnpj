from app import app
from flask import render_template, jsonify, request
import requests as py_request
import os
from dotenv import load_dotenv

load_dotenv()
app.secret_key = os.getenv('SECRET_KEY')

@app.route('/', methods=['POST', 'GET'])
def index():
    return render_template('index.html')


@app.route('/find', methods=['POST'])
def find():
    if request.method == 'POST':
        cnpj = request.form['cnpj']
        url = f'https://brasilapi.com.br/api/cnpj/v1/{cnpj}'
        req = py_request.get(url)
        req = req.json()
    if req['nome_fantasia'] == '':
        req['nome_fantasia'] = 'Sem registros'
    return jsonify({'html': render_template('update.html', data=req)})