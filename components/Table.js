import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';

const optionsPerPage = [2, 3, 4];

const Table = (props) => {
    const { data, titleArr, withPagination } = props;
    const [page, setPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(optionsPerPage[0]);

    useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);

    const handleRenderData = data.map((flight, i) => {
        return (
            <DataTable.Row key={i}>
                <DataTable.Cell style={styles.centerItems} >{flight.origin_country}</DataTable.Cell>
                <DataTable.Cell style={styles.centerItems} >{flight.amount}</DataTable.Cell>
            </DataTable.Row>
        );
    });

    const handleRenderTitles = titleArr.map((title, i) => {
        return (
            <DataTable.Title style={styles.centerItems} key={i}>{title}</DataTable.Title>
        );
    });

    return (
        <DataTable>
            <DataTable.Header >
                {handleRenderTitles}
            </DataTable.Header>

            {handleRenderData}

            {
                withPagination &&
                <DataTable.Pagination
                    page={page}
                    numberOfPages={3}
                    onPageChange={(page) => setPage(page)}
                    label="1-2 of 6"
                    optionsPerPage={optionsPerPage}
                    itemsPerPage={itemsPerPage}
                    setItemsPerPage={setItemsPerPage}
                    showFastPagination
                    optionsLabel={'Rows per page'}
                />
            }
        </DataTable>

    );
}

const styles = StyleSheet.create({
    centerItems: {
        justifyContent: "center"
    }
});

export default Table;