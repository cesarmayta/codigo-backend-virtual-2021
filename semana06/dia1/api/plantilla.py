from flask import Blueprint, request, jsonify
from . import db
import json

bp = Blueprint('plantilla', __name__, url_prefix='/plantilla')


@bp.route('', methods=['GET', 'POST', 'PUT', 'DELETE'])
def plantilla_func():
    carrera_id = request.args.get('id')
    skip = request.args.get('skip')
    limit = request.args.get('limit')

    request_body = request.get_json()
    if request.method == 'POST':
        # Crear carrera
        return jsonify({'_id': db.crear_plantilla(request_body)})
    elif request.method == 'PUT':
        # Actualizar nombre y descripcion de la carrera
        return jsonify({'modificados': db.actualizar_plantilla(request_body)})
    elif request.method == 'DELETE' and carrera_id is not None:
        # Borrar una carrera usando el _id
        return jsonify({'borrados': db.borrar_plantilla_por_id(carrera_id)})
    elif carrera_id is not None:
        # Obtener plantilla por _id
        result = db.consultar_plantilla_por_id(carrera_id)
        return jsonify({'carrera': json.loads(result)})
    else:
        # Obtener plantilla
        skip = (skip, 0)[skip is None]
        limit = (limit, 10)[limit is None]
        result = db.consultar_plantilla(skip, limit)
        return jsonify({'plantilla': json.loads(result)})


@bp.route('/test')
def test_connection():
    return jsonify({'collections': json.loads(db.test_connection())})
