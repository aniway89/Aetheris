export default function DesktopLayout({
    children,
    me,
}: {
    children: React.ReactNode
    me: React.ReactNode
}) {
    return (
        <div className="h-[100dvh] w-[100dvw] bg-black overflow-hidden overflow-x-hidden ">
            {me ?? children}
        </div>
    )
}
