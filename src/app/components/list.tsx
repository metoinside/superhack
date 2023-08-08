export default function List() {
    return (

        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th className="text-base-200 text-xl">Event</th>
                        <th className="text-base-200 text-xl">Event Detail</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src="https://img.icons8.com/?size=512&id=112289&format=png" />
                                    </div>
                                </div>
                                <div>
                                    <div className="text-base-200 font-bold">Early childhood education</div>
                                    <div className="text-base-200 opacity-50">Educate Org</div>
                                </div>
                            </div>
                        </td>
                        <td className="text-base-200">
                            Quality pre-primary education is the foundation of a child’s journey: Every stage of education that follows relies on its success.
                            <br />
                            <span className="badge badge-ghost badge-sm">Buy a ticket for $5</span>
                        </td>

                        <th>
                            <button className="btn btn-xs text-blue-900 bg-white space-y-24">details</button>

                            <button className="btn btn-xs text-white bg-blue-700 space-y-24">donate</button>
                        </th>
                    </tr>
                    {/* row 2 */}
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src="https://img.icons8.com/?size=512&id=hI50SJAcH6NW&format=png" />
                                    </div>
                                </div>
                                <div>
                                    <div className="text-base-200 font-bold">Gender Equality</div>
                                    <div className="text-base-200 opacity-50">Equality org</div>
                                </div>
                            </div>
                        </td>
                        <td className="text-base-200">
                            Aims all over the world to empower girls and women, and to ensure their full participation in political, social, and economic systems.
                            <br />
                            <span className="badge badge-ghost badge-sm">Buy a ticket for $5</span>
                        </td>

                        <th>
                            <button className="btn btn-xs text-blue-900 bg-white space-y-24">details</button>

                            <button className="btn btn-xs text-white bg-blue-700 space-y-24">donate</button>
                        </th>
                    </tr>
                    {/* row 3 */}
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src="https://img.icons8.com/?size=512&id=Q9UIRxd5Cr0q&format=png" />
                                    </div>
                                </div>
                                <div>
                                    <div className="text-base-200 font-bold">Disabilities Association</div>
                                    <div className="text-base-200 opacity-50">Time to break obstacles</div>
                                </div>
                            </div>
                        </td>
                        <td className="text-base-200">
                            Fifteen per cent of the world’s population – at least one billion people – have some form of disability, whether present at birth or acquired later in life. Nearly 240 million of them are children.
                            <br />
                            <span className="badge badge-ghost badge-sm">Buy a ticket for $5</span>
                        </td>

                        <th>
                            <button className="btn btn-xs text-blue-900 bg-white space-y-24">details</button>

                            <button className="btn btn-xs text-white bg-blue-700 space-y-24">donate</button>
                        </th>
                    </tr>
                    {/* row 4 */}
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src="https://img.icons8.com/?size=512&id=112289&format=png" />
                                    </div>
                                </div>
                                <div>
                                    <div className="text-base-200 font-bold">Library and intelligence classes</div>
                                    <div className="text-base-200 opacity-50">Educate Org</div>
                                </div>
                            </div>
                        </td>
                        <td className="text-base-200">
                            Socialization is a lifelong process that starts from the birth. In this process, school and primarily the family play an important role. Playing mind games and reading book are among key issues that influence positively the development of intelligence, learning new things and getting socialize in terms of children.          <br />
                            <span className="badge badge-ghost badge-sm">Buy a ticket for $5</span>
                        </td>

                        <th>
                            <button className="btn btn-xs text-blue-900 bg-white space-y-24">details</button>

                            <button className="btn btn-xs text-white bg-blue-700 space-y-24">donate</button>
                        </th>
                    </tr>
                </tbody>
                {/* foot */}

            </table>
        </div>

    )
}
