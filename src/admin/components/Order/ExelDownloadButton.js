import { Button } from "react-bootstrap";
import ReactExport from "react-export-excel";

export function ExelDownloadButton({ list }) {

    const ExcelFile = ReactExport.ExcelFile;
    const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
    const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;
    console.log(list)
    return (
        <ExcelFile element={<Button variant="dark" className='text-center w-100'>Download Data</Button>}>
            <ExcelSheet data={list} name="Employees">

                <ExcelColumn label="Name" value='consumer' />
                <ExcelColumn label="Meal name" value="mealName" />
                <ExcelColumn label="Note" value="note" />
                <ExcelColumn label="Price" value={(item)=>`$ ${item.mealPrice}`} />
                <ExcelColumn label="Quantity" value="quantity" />
                <ExcelColumn label="Total" value="total" />
            </ExcelSheet>
        </ExcelFile>
    );
}

