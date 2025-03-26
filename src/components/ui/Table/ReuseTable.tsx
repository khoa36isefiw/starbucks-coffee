import {
    Box,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Avatar,
    TablePagination,
    IconButton,
    Tooltip,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { blue } from '@mui/material/colors';
import React, { useState } from 'react';
import { Column } from '../../../interfaces/ITable';
import { IMenuData } from '../../../interfaces/IMenu';
import EditIcon from '@mui/icons-material/Edit';

interface ReusableTableProps {
    columns: Column[];
    rows: any[];
    onHandleEdit?: () => void;
    onHandleDelete?: (id: number) => void;
    onDelete?: (id: string) => void;
    customActionsRender?: (row: any) => React.ReactNode;
}

const ReusableTable: React.FC<ReusableTableProps> = ({
    columns,
    rows,
    onHandleEdit,
    onHandleDelete,
    customActionsRender,
}) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleEdit = (id: number) => {
        console.log('Edit ID:', id);
        // Thêm logic mở form edit hoặc điều hướng sang trang edit
    };

    const handleDelete = (id: number) => {
        console.log('Delete ID:', id);
        // Gọi API xóa hoặc confirm trước khi xóa
    };

    return (
        <Box sx={{ borderRadius: 1, bgcolor: '#fff', border: '1px solid #ccc' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                    sx={{ bgcolor: blue[200], fontSize: '14px' }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell
                                                key={column.id}
                                                align={column.align}
                                                sx={{ fontSize: '14px' }}
                                            >
                                                {column.id === 'avatar' ? (
                                                    <Avatar
                                                        alt="User Image"
                                                        src={
                                                            row.imagePath ||
                                                            'https://static.vecteezy.com/system/resources/thumbnails/030/353/225/small_2x/beautiful-night-sky-background-ai-generated-photo.jpg'
                                                        }
                                                        sx={{ height: '56px', width: '56px' }}
                                                    />
                                                ) : column.id === 'actions' ? (
                                                    customActionsRender && customActionsRender(row)
                                                ) : // <>
                                                //     <Tooltip title="Edit">
                                                //         <IconButton
                                                //             onClick={onHandleEdit}
                                                //             color="primary"
                                                //         >
                                                //             <EditIcon />
                                                //         </IconButton>
                                                //     </Tooltip>
                                                //     <Tooltip title="Delete">
                                                //         <IconButton
                                                //             onClick={() => handleDelete(row.id)}
                                                //             color="error"
                                                //         >
                                                //             <DeleteIcon />
                                                //         </IconButton>
                                                //     </Tooltip>
                                                // </>
                                                //  (
                                                //     customActionsRender ? (
                                                //         renderActions(row)
                                                //     ) : onDelete ? (
                                                //         <Tooltip title="Delete">
                                                //             <IconButton
                                                //                 onClick={() => onDelete(row.id)}
                                                //                 color="secondary"
                                                //             >
                                                //                 <DeleteIcon
                                                //                     sx={{ fontSize: '22px' }}
                                                //                 />
                                                //             </IconButton>
                                                //         </Tooltip>
                                                //     ) : null
                                                column.format ? (
                                                    column.format(value)
                                                ) : (
                                                    value
                                                )}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                sx={{
                    '.MuiTablePagination-selectLabel': { fontSize: '13px' },
                    '.MuiTablePagination-select': { fontSize: '13px', mt: 1 },
                    '.MuiTablePagination-displayedRows': { fontSize: '13px' },
                    '.MuiSelect-icon': { fontSize: '24px' },
                    '.MuiSvgIcon-root': { fontSize: '24px' },
                }}
            />
        </Box>
    );
};

export default ReusableTable;
