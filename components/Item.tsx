interface IItemProps {
    url: string
    label: string
}

const Item = ({url, label}: IItemProps): JSX.Element => {
    return (
        <li>
            <a
                href={url}
                target="__blank"
                className="text-6xl font-medium text-white hover:text-red-400 transition-colors duration-200 ease-linear"
            >
                {label}
            </a>
        </li>
    )
}

export default Item