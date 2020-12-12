from flask import Flask, jsonify, request 

app = Flask(__name__) 

@app.route('/', methods = ['GET', 'POST']) 
def home(): 
    #this checks if it's a get request 
    #if so then return a json object with key data and value data ('hello world')
    if(request.method == 'GET'): 
        data = "hello world"
        return jsonify({'data': data}) 
    
    #if it is a post request then 
    else:
        data = request.get_json() #this is the syntax we use for getting a json object from our app 
        # from postman you are sending a json object when you change mode to POST
        # this recieves it 
        return jsonify({'messgae' : data}) # we use jsonify to return a JSON object back to the app that reuqested something to us
     

# driver function 
if __name__ == '__main__': 

	app.run(debug = True) 

