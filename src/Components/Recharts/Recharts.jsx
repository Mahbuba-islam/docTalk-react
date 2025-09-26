import { Bar, BarChart, Tooltip, XAxis, YAxis , ResponsiveContainer} from "recharts";


const Recharts = ({ appointment }) => {
  const data = [
    { name: 'Fee', value: appointment.consultation_fee }
  ]

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h3 className="text-lg font-semibold mb-2">Consultation Fee</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#4f46e5" radius={[4, 4, 0, 0]}>
            <LabelList dataKey="value" position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Recharts;