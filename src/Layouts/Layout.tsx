import React, {FunctionComponent} from 'react';
import {LayoutProps} from "./Layout.props";
import {Header, Sidebar} from '../components';
import styles from './Layout.module.scss';

const Layout = ({children}:LayoutProps) => {
    return (
        <div className={styles.layout}>
            <Header/>
            {children}
            <Sidebar/>
        </div>
    );
};

export const withLayout = <T extends Record<string, any>>(Component: FunctionComponent<T>) => {
    return (props: T) => {
        return (
            <div>
                <Layout>
                    <Component {...props}/>
                </Layout>
            </div>
        )
    }
}