from django.contrib.auth import get_user_model
from graphene_django import DjangoObjectType
import graphql_social_auth
import graphene

from user.models import CustomUser


class UserType(DjangoObjectType):

    is_private_account = graphene.Boolean(source='is_private_account')

    class Meta:
        model = get_user_model()
        interfaces = (graphene.Node,)


class SocialAuth(graphql_social_auth.SocialAuthMutation):
    user = graphene.Field(UserType)

    @classmethod
    def resolve(cls, root, info, social, **kwargs):
        return cls(user=social.user)


class Mutations(graphene.ObjectType):
    social_auth = SocialAuth.Field()


class Query(graphene.ObjectType):
    users = graphene.List(UserType)

    def resolve_users(self, info):
        return CustomUser.objects.all()
