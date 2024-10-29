export default function InformasiPribadi() {
  return (
    <div className="container mx-auto p-2 text-center pt-20">
      <h2 className="text-black font-bold text-2xl mb-4">Informasi Pribadi</h2>
      {/* Ganti nilai max-w-md atau ubah kelas padding untuk memperpendek bingkai */}
      <div className="max-w-lg mx-auto">
        <div className="border-2 border-indigo-400/75 rounded-lg bg-blue-300 p-4 my-2">
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-12 md:col-span-6 font-semibold">Tempat, Tanggal Lahir</div>
            <div className="col-span-12 md:col-span-6">Bandung, 20 November 2003</div>
          </div>
        </div>
        <div className="border-2 border-indigo-400/75 rounded-lg bg-blue-300 p-4 my-2">
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-12 md:col-span-6 font-semibold">Jenis Kelamin</div>
            <div className="col-span-12 md:col-span-6">Perempuan</div>
          </div>
        </div>
        <div className="border-2 border-indigo-400/75 rounded-lg bg-blue-300 p-4 my-2">
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-12 md:col-span-6 font-semibold">TB/BB</div>
            <div className="col-span-12 md:col-span-6">160/65</div>
          </div>
        </div>
        <div className="border-2 border-indigo-400/75 rounded-lg bg-blue-300 p-4 my-2">
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-12 md:col-span-6 font-semibold">Status Pernikahan</div>
            <div className="col-span-12 md:col-span-6">Belum Menikah</div>
          </div>
        </div>
        <div className="border-2 border-indigo-400/75 rounded-lg bg-blue-300 p-4 my-2">
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-12 md:col-span-6 font-semibold">Whatsapp</div>
            <div className="col-span-12 md:col-span-6">0851-5915-2080</div>
          </div>
        </div>
        <div className="border-2 border-indigo-400/75 rounded-lg bg-blue-300 p-4 my-2">
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-12 md:col-span-6 font-semibold">Email</div>
            <div className="col-span-12 md:col-span-6">putriamnr20@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface RowInformasiProps {
  data: string;
  isidata: string;
}

function RowRiwayat(props: RowInformasiProps) {
  return (
    <div className="border-2 border-indigo-600/75 rounded-lg bg-blue-800 p-2 my-2">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-1">
          <div className="col-span-12 md:col-span-4">{props.data}</div>
          <div className="col-span-12 md:col-span-4">{props.isidata}</div>
        </div>
      </div>
    </div>
  );
}
