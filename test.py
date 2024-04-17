from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

@app.route("/")
def receive_json_data():
    json_data = request.json
    print(json_data)
    return json_data, 200

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/send_location')
def send_location():
    result = receive_json_data()
    return jsonify({'result': result})

if __name__ == "__main__":
    app.run(debug=True)
