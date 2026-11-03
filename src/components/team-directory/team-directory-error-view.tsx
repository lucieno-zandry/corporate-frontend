interface TeamDirectoryErrorViewProps {
    error: Error,
}

export const TeamDirectoryErrorView = ({ error }: TeamDirectoryErrorViewProps) => {
    return (
        <div>
            <div>Error</div>
            <p>{error.message}</p>
        </div>
    )
}