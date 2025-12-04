import Menu from '@containers/Layout/components/Menu';
import {FC} from 'react';
import { wrapper, container } from './styles.css';

export interface LayoutProps {
    children?: React.ReactNode;
}

const Layout:FC<LayoutProps> = ({ children }) => {
    return (
        <section className={wrapper}>
            <Menu />
            <div className={container}>
                {children}
            </div>
        </section>
    )
}

export default Layout;