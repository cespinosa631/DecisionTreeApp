import os
from flask import render_template, Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

with app.app_context():
    @app.route('/', methods = ['GET', 'POST'])
    def home():
        return render_template('home.html')

    if __name__ == "__main__":
        app.run(debug=True)