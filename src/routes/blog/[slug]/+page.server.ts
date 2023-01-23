import { gql, GraphQLClient } from 'graphql-request';

export async function load({ params }: { params: { slug: string } }) {
	const client = new GraphQLClient(
		`https://cloud.caisy.io/api/v3/e/54026eaa-a8fc-49f9-ac37-ebe5148c4926/graphql`,
		{
			headers: {
				'x-caisy-apikey': `Q1Bi5yudIr4HxQEtVt2fmalZRyndjuDW`
			}
		}
	);
	const data = await client.request(
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

	return data?.allBlogArticle?.edges?.[0]?.node;
}
