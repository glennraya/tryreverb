import { Button, Card, CardHeader, CardBody } from '@nextui-org/react'

const CardNotification = ({ product, close, onMouseEnter, onMouseLeave }) => {
    return (
        <>
            <Card
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                shadow="lg"
                className="fixed right-6 top-6 z-10 w-[430px] border border-cyan-200 px-2"
            >
                <CardHeader className="justify-between">
                    <div className="flex gap-5">
                        <div className="flex flex-col items-start justify-center gap-1">
                            <h4 className="font-semibold leading-none text-default-700">
                                You requested to delete this product
                            </h4>
                        </div>
                    </div>
                    <Button
                        className="bg-gray-200 text-black"
                        radius="full"
                        size="sm"
                        isIconOnly
                        aria-label="Close"
                        onClick={() => close()}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="3"
                            stroke="currentColor"
                            className="h-4 w-4 opacity-30 hover:opacity-50"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                            />
                        </svg>
                    </Button>
                </CardHeader>
                <CardBody className="pb-4 text-sm text-default-600">
                    <p>
                        You have requested to delete the{' '}
                        <span className="font-bold">{product}</span>. Please
                        wait for an administrator to approve this request to
                        finalize the removal.
                    </p>
                </CardBody>
            </Card>
        </>
    )
}

export default CardNotification
