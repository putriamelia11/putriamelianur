export default function RiwayatPekerjaan() {
    return (
        < div className="container mx-auto p-2 text-center pt-20">
        <h2 className="text-black font-bold text-2xl mb-4"> Riwayat Pekerjaan</h2>
            <div className="border-2 border-indigo-400/75 rounded-lg bg-blue-300 p-2 my-5">
            <div className="container mx-auto">
                <div className="grid grid-cols-12 gap-1">
                    <div className="col-span-12 md:col-span-4">2020</div>
                    <div className="col-span-12 md:col-span-4">PT. Oppo Indonesia</div>
                    <div className="col-span-12 md:col-span-4">Administrasi</div>
                </div>
            </div>
            </div>
            <div className="border-2 border-indigo-400/75 rounded-lg bg-blue-300 p-2 my-5">
            <div className="container mx-auto">
                <div className="grid grid-cols-12 gap-1">
                    <div className="col-span-12 md:col-span-4">2021</div>
                    <div className="col-span-12 md:col-span-4">PT. KAI</div>
                    <div className="col-span-12 md:col-span-4">HRD</div>
                </div>
            </div>
            </div>
            <div className="border-2 border-indigo-400/75 rounded-lg bg-blue-300 p-2 my-5">
            <div className="container mx-auto">
                <div className="grid grid-cols-12 gap-1">
                    <div className="col-span-12 md:col-span-4">2022</div>
                    <div className="col-span-12 md:col-span-4">PT. Gacoan</div>
                    <div className="col-span-12 md:col-span-4">CEO</div>
                </div>
            </div>
            </div>
            <div className="border-2 border-indigo-400/75 rounded-lg bg-blue-300 p-2 my-5">
            <div className="container mx-auto">
                <div className="grid grid-cols-12 gap-1">
                    <div className="col-span-12 md:col-span-4">2023</div>
                    <div className="col-span-12 md:col-span-4">PT. Wings</div>
                    <div className="col-span-12 md:col-span-4">CEO</div>
                </div>
            </div>
            </div>
          </div>
    );
  }

  interface RowPekerjaanProps {
    tahun: string;
    instansi: string;
    jabatan: string;
    }

    function RowRiwayat(props: RowPekerjaanProps) {
        return(
            <div className="border-2 border-indigo-600/75 rounded-lg bg-blue-800 p-2 my-5">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 gap-1">
                        <div className="col-span-12 md:col-span-4">{props.tahun}</div>
                        <div className="col-span-12 md:col-span-4">{props.instansi}</div>
                        <div className="col-span-12 md:col-span-4">{props.jabatan}</div>
                    </div>
                </div>
            </div>
        )
    }