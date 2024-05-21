import { VerticalDotsIcon } from '@/Components/VerticalDotsIcon'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, router } from '@inertiajs/react'
import {
    Button,
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Dropdown,
    Link,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Pagination,
    Chip
} from '@nextui-org/react'
import { useState } from 'react'

export default function Dashboard({ auth, products }) {
    const [items, setItems] = useState(products)

    // Handle the simple pagination
    const handlePageChange = url => {
        if (url) {
            router.get(url)
        }
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <Table
                        isStriped
                        aria-label="Example static collection table"
                    >
                        <TableHeader>
                            <TableColumn>PRODUCT NAME</TableColumn>
                            <TableColumn>QUANTITY</TableColumn>
                            <TableColumn>STATUS</TableColumn>
                            <TableColumn>ACTIONS</TableColumn>
                        </TableHeader>
                        <TableBody>
                            {items.data.map(product => (
                                <TableRow key={product.id}>
                                    <TableCell className="font-medium">
                                        {product.name}
                                    </TableCell>
                                    <TableCell>{product.quantity}</TableCell>
                                    <TableCell>
                                        <Chip
                                            size="sm"
                                            color={
                                                product.status === 'available'
                                                    ? 'success'
                                                    : 'danger'
                                            }
                                        >
                                            {product.status}
                                        </Chip>
                                    </TableCell>
                                    <TableCell>
                                        <Dropdown backdrop="blur">
                                            <DropdownTrigger>
                                                <Button
                                                    isIconOnly
                                                    variant="light"
                                                >
                                                    <VerticalDotsIcon />
                                                </Button>
                                            </DropdownTrigger>
                                            <DropdownMenu
                                                variant="faded"
                                                aria-label="Static Actions"
                                            >
                                                <DropdownItem
                                                    key="edit"
                                                    description="Update the details"
                                                >
                                                    Edit
                                                </DropdownItem>
                                                <DropdownItem
                                                    key="delete"
                                                    className="text-danger"
                                                    color="danger"
                                                    description="No longer needed."
                                                >
                                                    Delete
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                    <div className="mt-2 flex gap-2">
                        <Button
                            className="bg-white font-medium text-black"
                            size="sm"
                            variant="faded"
                            color="primary"
                            isDisabled={!items.prev_page_url}
                            onPress={() =>
                                handlePageChange(items.prev_page_url)
                            }
                        >
                            Previous
                        </Button>
                        <Button
                            className="bg-white font-medium text-black"
                            size="sm"
                            variant="faded"
                            color="primary"
                            isDisabled={!items.next_page_url}
                            onPress={() =>
                                handlePageChange(items.next_page_url)
                            }
                        >
                            Next
                        </Button>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
