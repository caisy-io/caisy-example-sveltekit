import { gql, GraphQLClient } from 'graphql-request';
import { CAISY_API_KEY, CAISY_PROJECT_ID } from '$env/static/private'

export async function load({ params }: { params: { slug: string } }) {
	const client = new GraphQLClient(
		`https://cloud.caisy.io/api/v3/e/${CAISY_PROJECT_ID}/graphql`,
		{
			headers: {
				'x-caisy-apikey': CAISY_API_KEY
			}
		}
	);
	const gqlResponse = await client.request(
		gql`
			query allBlogArticle($slug: String) {
				allBlogArticle(where: { slug: { eq: $slug } }) {
					edges {
						node {
							text {
								json
							}
							title
							slug
							id
						}
					}
				}
			}
		`,
		{ slug: params.slug }
	);

	return gqlResponse?.allBlogArticle?.edges?.[0]?.node;
}
