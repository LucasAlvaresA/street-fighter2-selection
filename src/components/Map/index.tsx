import * as Styled from "./styles";

type Props = {
    country: string;
    iconPosition: { top: number; left: number; width: number; height: number };
};

export const Map = ({ country, iconPosition }: Props) => {
    return (
        <Styled.Container>
            <Styled.Icon
                src={`/assets/flags/${country}`}
                alt="Country flag"
                style={{
                    top: iconPosition.top,
                    left: iconPosition.left,
                    width: iconPosition.width,
                    height: iconPosition.height,
                }}
            />
        </Styled.Container>
    );
};
