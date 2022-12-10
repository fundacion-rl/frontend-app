import React from 'react'
import Layout from "../layout/Layout";
import BannerGlobalCompact from '../components/BannerGlobalCompact'
import DonacionesPasarela from '../components/DonacionesPasarela';

export default function Donaciones() {
    return (
        <Layout>
            <DonacionesPasarela />
            <BannerGlobalCompact />
        </Layout>

    )
}
