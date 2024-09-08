import { ChangeEventHandler } from "react"
import styled from "styled-components"

interface IDateRangeFilter {
    startDate: string,
    endDate: string,
    onStartChange: ChangeEventHandler<HTMLInputElement>
    onEndChange: ChangeEventHandler<HTMLInputElement>
};

const Container = styled.div({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
});

const Label = styled.label({
    fontSize: 18,
    fontWeight: 500,
    color: '#0F466B'
})

const DateInput = styled.input`
    padding: 12px;
    outline: none;
    border: 1px solid #979797;
    border-radius: 4px;
    transition: border-color .3s ease;
    color: #3498DB;

    &:focus {
        border-color: #3498DB;
    }
`;

const DateRangFilter = ({ startDate, endDate, onStartChange, onEndChange }: IDateRangeFilter) => {
    return (
        <Container>
            <div>
                <Label>From: </Label>
                <DateInput type="date" value={startDate} onChange={onStartChange} />
            </div>
            <div>
                <Label>To: </Label>
                <DateInput type="date" value={endDate} onChange={onEndChange} />
            </div>
        </Container>
    )
}

export default DateRangFilter