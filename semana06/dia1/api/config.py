import os


class Config(object):
    DEBUG = True
    SECRET_KEY = 'dev'
    DB_URI = os.environ['DB_URI']


class DevelopmentConfig(Config):
    DEBUG = False
