import datetime
from graphene.types import Scalar
from graphql.language import ast

class CustomDateTime(Scalar):
    '''Custom DateTime Scalar'''

    @staticmethod
    def serialize(dt):
        return dt.timestamp()

    @staticmethod
    def parse_literal(node):
        if isinstance(node, ast.StringValue):
            return datetime.datetime.strptime(
                node.value, "%Y-%m-%dT%H:%M:%S.%f")

    @staticmethod
    def parse_value(value):
        return datetime.datetime.strptime(value, "%Y-%m-%dT%H:%M:%S.%f")
