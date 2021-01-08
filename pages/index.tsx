import Item from "components/Item"

const Home = (): JSX.Element => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-700">
            <div className="container px-5">
                <ul className="space-y-5 > * flex flex-col items-center">
                    <Item
                        url="https://nextjs.org/docs/getting-started"
                        label="Next.js"
                    />
                    <Item
                        url="https://www.typescriptlang.org/"
                        label="Typescript"
                    />
                    <Item
                        url="https://tailwindcss.com/docs"
                        label="Tailwindcss"
                    />
                </ul>
            </div>
        </div>
    )
}

export default Home