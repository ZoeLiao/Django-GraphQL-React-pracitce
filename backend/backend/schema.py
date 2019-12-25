import graphene

import user.schema


class Query(user.schema.Query):
    # This class will inherit from multiple Queries
    # as we begin to add more apps to our project
    pass


class Mutations(user.schema.Mutations):
    pass


schema = graphene.Schema(
    query=Query,
    mutation=Mutations
)
