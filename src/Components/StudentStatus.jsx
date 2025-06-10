function StudentStatus() {
    const detail = [{
        name: "React Js",
        category: "Development",
        progress: "88%",
        status: "In-progress",
        access: "23 May 2025"

    },
    {
        name:"Django",
        category:"Development",
        progress:"78%",
        status:"In-Progress",
        access:"22 May 2025"
    }

]
    return (<>
        <div className="bg-[#f7f7f7] w-fit p-2 rounded-md border ">
            <table className="table-auto p-4">
              <thead className="border-b-2 border-gray-900">
    <tr>
      <th className="text-left px-4 py-2">Course Name</th>
      <th className="text-left px-4 py-2">Category</th>
      <th className="text-left px-4 py-2">Progress</th>
      <th className="text-left px-4 py-2">Status</th>
      <th className="text-left px-4 py-2">Last Accessed</th>
    </tr>
  </thead>
                <tbody className="">
                    {
                        detail.map((item,index) => {
                            return (<>
                                <tr className="border-b-2 p-2 border-black">
                                    <td className="px-2 py-2">{item.name}</td>
                                    <td className="pl-3">{item.category}</td>
                                    <td className="pl-4">{item.progress}</td>
                                    <td className="bg-gray-200 p-2">{item.status}</td>
                                    <td className="pl-5">{item.access}</td>
                                </tr>
                            </>)
                        })
                    }

                </tbody>
            </table>
        </div>
    </>)

}
export default StudentStatus