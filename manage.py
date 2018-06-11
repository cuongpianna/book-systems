import os
from flask import request
from flask_script import Manager,Shell
from flask_migrate import Migrate, MigrateCommand
from flask_cors import CORS

from app import create_app,db

app = create_app('default')

@app.after_request
def set_allow_origin(resp):
    """ Set origin for GET, POST, PUT, DELETE requests """

    h = resp.headers

    # Allow crossdomain for other HTTP Verbs
    if request.method != 'OPTIONS' and 'Origin' in request.headers:
        h['Access-Control-Allow-Origin'] = request.headers['Origin']


    return resp
CORS(app)
manager = Manager(app)
migrate = Migrate(app,db)

manager.add_command("shell",Shell)
manager.add_command('db', MigrateCommand)

if __name__ == "__main__":
    manager.run()
