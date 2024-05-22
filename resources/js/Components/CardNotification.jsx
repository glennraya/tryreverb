import { Button, Card, CardHeader, CardBody } from '@nextui-org/react'
import { useEffect, useState } from 'react'

const CardNotification = ({ notifIndex, product, close, cleanUpNotif }) => {
    const [showAlert, setShowAlert] = useState(close)
    const [timeoutId, setTimeoutId] = useState(null)

    useEffect(() => {
        // Clear any existing timeout
        if (timeoutId) {
            clearTimeout(timeoutId)
        }

        // Start a new timeout
        const newTimeoutId = setTimeout(() => {
            setShowAlert(false)
        }, 5000)

        setTimeoutId(newTimeoutId)

        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
        }
    }, [])

    // Stop the timer on mouse enter
    const handleMouseEnter = () => {
        if (timeoutId) {
            clearTimeout(timeoutId)
        }
    }

    // Restart the timer after mouse leave
    const handleMouseLeave = () => {
        const newTimeoutId = setTimeout(() => {
            setShowAlert(false)
        }, 5000)

        setTimeoutId(newTimeoutId)
    }

    return (
        <>
            {showAlert && (
                <Card
                    shadow="lg"
                    className="w-[430px] border border-cyan-200 px-2"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
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
                            onClick={() => {
                                setShowAlert(false)
                                cleanUpNotif(product)
                            }}
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
                            <span className="font-bold">{product.name}</span>.
                            Please wait for an administrator to approve this
                            request to finalize the removal.
                        </p>
                    </CardBody>
                </Card>
            )}
        </>
    )
}

export default CardNotification
