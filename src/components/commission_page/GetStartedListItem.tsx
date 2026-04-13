interface GetStartedProps {
    number: string,
    description: string
}

export const GetStartedListItem = ({ number, description }: GetStartedProps) => {
    return (
      <li className="flex gap-2">
        <span className="text-primary font-bold text-lg">{number}</span>
        <p className="text-[#322528] md:text-lg">{description}</p>
      </li>
    );
}