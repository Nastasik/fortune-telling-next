"use client"
import { MainLayout } from "@shared/layouts/MainLayout";
import { Navbar } from "@widgets/Navbar";
import { Sidebar } from "@widgets/Sidebar";
import { Loader } from "@shared/ui/Loader";
import React, { FC, ReactNode, Suspense, memo } from "react";
import './_styles/index.scss';

export const App: FC = memo(({children}: {children: ReactNode}) => {
    return (
                <Suspense fallback={<Loader />}>
                    <MainLayout
                        header={<Navbar />}
                        content={children}
                        sidebar={<Sidebar />}
                    />       
                </Suspense>
            )
    })

 