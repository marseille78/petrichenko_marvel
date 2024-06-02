import { Block, Circle, Header, Mini, Select } from "./Skeleton.styled";

const Skeleton = () => {
    return (
        <>
            <Select>Please select a character to see information</Select>
            <div className="skeleton" data-cmp="Skeleton">
                <Header>
                    <Circle />
                    <Mini />
                </Header>
                <Block />
                <Block />
                <Block />
            </div>
        </>
    );
};

export default Skeleton;
