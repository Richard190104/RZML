from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)

images = [
    {"url": "https://example.com/images/image1.jpg", "alt": "Obrázok 1"},
    {"url": "https://example.com/images/image2.jpg", "alt": "Obrázok 2"},
    {"url": "https://example.com/images/image3.jpg", "alt": "Obrázok 3"},
]

@app.route('/api/images', methods=['GET'])
def get_images():
    return jsonify(images)

app = Flask(__name__)
CORS(app)  # Povolenie pre všetky domény

if __name__ == '__main__':
    app.run(debug=True)
