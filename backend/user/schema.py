from graphene_django import DjangoObjectType
import graphql_social_auth
import graphene

from user.models import UserModel


class Mutations(graphene.ObjectType):
    social_auth = graphql_social_auth.SocialAuth.Field()


class User(DjangoObjectType):
    class Meta:
        model = UserModel


class Query(graphene.ObjectType):
    users = graphene.List(User)

    def resolve_users(self, info):
        return UserModel.objects.all()


schema = graphene.Schema(
    query=Query,
    mutation=Mutations
)
