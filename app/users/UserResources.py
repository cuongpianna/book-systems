import os,werkzeug
from flask import request,jsonify,json

from flask_restful import Resource,marshal_with,reqparse
from flask_marshmallow import Schema
from werkzeug.utils import secure_filename
from werkzeug.datastructures import FileStorage

from ..models.Users import Users
from app import ma,db, UPLOAD_FOLDER


class UserSchema(ma.ModelSchema):
    class Meta:
        model = Users
        fields = ('username','email','date_of_birth','avartar','timestamp')

userschema = UserSchema()
userschema = UserSchema(many=True)

parser = reqparse.RequestParser()
parser.add_argument('username',help = 'Không được trống trường này', required = True)
parser.add_argument('email',help = 'Không được trống trường này', required = True)
parser.add_argument('password',help = 'Không được trống trường này', required = True)
parser.add_argument('date_ob_birth')
parser.add_argument('avartar',type=werkzeug.datastructures.FileStorage,location='files')


class UsersResource(Resource):
    def get(self):
        page = int(request.args.get('count')) if request.args.get('count') else 5
        users = Users.query.all()
        return userschema.dump(users)

    def post(self):
        data = parser.parse_args()
        user = Users.query.filter_by(username=data['username']).first()
        file = data['avartar']
        #file = request.files['avartar']

        if user:
           return jsonify({'msg':'Tai khoan nay da ton tai'})
        user = Users.query.filter_by(email=data['email']).first()

        if user:
           return jsonify({'msg':'Email nay da ton tai'})

        #filename = file
        #if file:
        #    file.save(os.path.join(UPLOAD_FOLDER, filename))
        # path = ''
        #
        #     file.save(os.path.join(UPLOAD_FOLDER, filename))
        #     path = os.path.join(UPLOAD_FOLDER, filename)

        user = Users(username=data['username'],password_hash=data['password'],email=data['email'])
        db.session.add(user)
        db.session.commit()
        return jsonify({'msg':'Tao tai khoan thanh cong'})


    def delete(self):
        Users.query.delete()
        db.session.commit()
        return jsonify({'msg':"Xoa thanh cong"})

