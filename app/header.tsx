import Link from "next/link";

export default function Header() {
    return (
        <>
            <div>
                <header>
                    <div>
                        <img src="cashlogo.png" alt="cashlogo" />
                    </div>
                    <ul>
                        <li>
                            <Link href="/">
                                <p>Home</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/stock">
                                <p>Stock</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/seals">
                                <p>Sales</p>
                            </Link>
                        </li>
                    </ul>
                </header>
            </div>
        </>
    );
}