from flask import Flask, request

app = Flask(__name__)

@app.route("/")
def receive_json_data():
    json_data = request.json
    print(json_data)
    return "JSON data received", 200

if __name__ == "__main__":
    app.run(debug=True)
