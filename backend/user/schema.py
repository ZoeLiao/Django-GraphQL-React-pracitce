from django.contrib.auth import get_user_model
from graphene_django import DjangoObjectType
import graphql_social_auth
import graphene

from user.models import UserModel


class UserType(DjangoObjectType):
    class Meta:
        model = get_user_model()


class User(DjangoObjectType):
    class Meta:
        model = UserModel


class SocialAuth(graphql_social_auth.SocialAuthMutation):
    user = graphene.Field(UserType)

    @classmethod
    def resolve(cls, root, info, social, **kwargs):
        return cls(user=social.user)


class Mutations(graphene.ObjectType):
    social_auth = SocialAuth.Field()


class Query(graphene.ObjectType):
    users = graphene.List(User)

    def resolve_users(self, info):
        return UserModel.objects.all()
