from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

@app.route("/")
def receive_json_data():
    json_data = request.json
    print(json_data)
    return "JSON data received", 200

if __name__ == "__main__":
    app.run(debug=True)



from flask import Flask, render_template, jsonify

app = Flask(__name__)

def send_location_sms(latitude, longitude):

    client = Client(account_sid, auth_token)

    location_message = f"Latitude: {latitude}, Longitude: {longitude}"

    try:
        message = client.messages.create(
            body=location_message,
            from_=twilio_phone_number,
            to=recipient_phone_number
        )

        return f"Message sent. SID: {message.sid}"

    except Exception as e:
        return f"An error occurred: {str(e)}"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/send_location')
def send_location():
    try:
        location_ip = geocoder.ip('me')
        latitude = location_ip.latlng[0]
        longitude = location_ip.latlng[1]
        
        result = send_location_sms(latitude, longitude)

        return jsonify({'result': result})

    except Exception as e:
        return jsonify({'result': f"An error occurred: {str(e)}"})

if __name__ == "__main__":
    app.run(debug=True)
