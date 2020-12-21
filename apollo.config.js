
module.exports = {
    client: {
        service: {
            name: 'beaufort-asia',
            localSchemaFile: './prismic-schema.json'
        },
        includes: ['{pages,graphql}/**/*.{gql,graphql}'],
    }
}
