"use client"

import React, { useState } from 'react'
import { Bell, Search, Users, Settings, BarChart2, FileText, Lock } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts'

// Updated mock data for users with timeboxing performance
const users = [
    { id: 1, name: "Alice Johnson", role: "Software Developer", email: "alice@example.com", status: "Active", timeboxScore: 92 },
    { id: 2, name: "Bob Smith", role: "Project Manager", email: "bob@example.com", status: "Active", timeboxScore: 88 },
    { id: 3, name: "Carol Williams", role: "UX Designer", email: "carol@example.com", status: "Active", timeboxScore: 95 },
    { id: 4, name: "David Brown", role: "QA Engineer", email: "david@example.com", status: "Inactive", timeboxScore: 78 },
    { id: 5, name: "Eva Martinez", role: "Frontend Developer", email: "eva@example.com", status: "Active", timeboxScore: 90 },
]

// Updated mock data for user performance focused on timeboxing and contribution types
const userPerformance = {
    tasksCompleted: 45,
    averageTimeboxScore: 92,
    productivityIncrease: 15,
    contributionTypes: {
        attend: 15,
        support: 20,
        own: 10,
    },
    totalInWork: 45,
    calculatedHours: 180,
    monthlyData: [
        { month: 'Jan', timeboxScore: 88, tasksCompleted: 40, attend: 12, support: 18, own: 10, totalIn: 40, hours: 160 },
        { month: 'Feb', timeboxScore: 90, tasksCompleted: 42, attend: 14, support: 19, own: 9, totalIn: 42, hours: 168 },
        { month: 'Mar', timeboxScore: 89, tasksCompleted: 38, attend: 13, support: 17, own: 8, totalIn: 38, hours: 152 },
        { month: 'Apr', timeboxScore: 92, tasksCompleted: 45, attend: 15, support: 20, own: 10, totalIn: 45, hours: 180 },
        { month: 'May', timeboxScore: 94, tasksCompleted: 47, attend: 16, support: 21, own: 10, totalIn: 47, hours: 188 },
        { month: 'Jun', timeboxScore: 95, tasksCompleted: 50, attend: 17, support: 22, own: 11, totalIn: 50, hours: 200 },
    ]
}

export default function AdminDashboard() {
    const [selectedUser, setSelectedUser] = useState(null)

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}


            {/* Main content */}
            <main className="flex-1 p-8 overflow-auto">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-semibold">Organization Users</h1>
                    <div className="flex items-center space-x-4">
                        <Input type="text" placeholder="Search users..." className="w-64" />
                        <Button>
                            <Search className="mr-2 h-4 w-4" />
                            Search
                        </Button>
                        <Button variant="outline">
                            <Bell className="h-4 w-4" />
                        </Button>
                        <Avatar>
                            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User avatar" />
                            <AvatarFallback>AD</AvatarFallback>
                        </Avatar>
                    </div>
                </div>

                <Card>
                    <CardHeader>
                        <div className="flex justify-between items-center">
                            <CardTitle>User List</CardTitle>
                            <Button>Add New User</Button>
                        </div>
                        <CardDescription>Manage and view user timeboxing performance</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Role</TableHead>
                                    <TableHead>Email</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Timebox Score</TableHead>
                                    <TableHead>Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {users.map((user) => (
                                    <TableRow key={user.id}>
                                        <TableCell>{user.name}</TableCell>
                                        <TableCell>{user.role}</TableCell>
                                        <TableCell>{user.email}</TableCell>
                                        <TableCell>
                                            <span className={`px-2 py-1 rounded-full text-xs ${user.status === 'Active' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
                                                }`}>
                                                {user.status}
                                            </span>
                                        </TableCell>
                                        <TableCell>{user.timeboxScore}/100</TableCell>
                                        <TableCell>
                                            <Button variant="ghost" onClick={() => setSelectedUser(user)}>View Performance</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

                {selectedUser && (
                    <Card className="mt-8">
                        <CardHeader>
                            <CardTitle>{selectedUser.name}'s Timeboxing Performance</CardTitle>
                            <CardDescription>View detailed timeboxing metrics and contribution types</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-3 gap-4 mb-8">
                                <Card>
                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-sm font-medium text-muted-foreground">Tasks Completed</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">{userPerformance.tasksCompleted}</div>
                                        <p className="text-xs text-muted-foreground">Total tasks in work: {userPerformance.totalInWork}</p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-sm font-medium text-muted-foreground">Avg. Timebox Score</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">{userPerformance.averageTimeboxScore}/100</div>
                                        <p className="text-xs text-muted-foreground">+2 points from last month</p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-sm font-medium text-muted-foreground">Calculated Hours</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">{userPerformance.calculatedHours}</div>
                                        <p className="text-xs text-muted-foreground">Total hours worked</p>
                                    </CardContent>
                                </Card>
                            </div>
                            <Card className="mb-8">
                                <CardHeader>
                                    <CardTitle>Contribution Types</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="h-[200px]">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <BarChart data={[userPerformance.contributionTypes]}>
                                                <CartesianGrid strokeDasharray="3 3" />
                                                <XAxis dataKey="name" />
                                                <YAxis />
                                                <Tooltip />
                                                <Legend />
                                                <Bar dataKey="attend" fill="#8884d8" name="Attend" />
                                                <Bar dataKey="support" fill="#82ca9d" name="Support" />
                                                <Bar dataKey="own" fill="#ffc658" name="Own" />
                                            </BarChart>
                                        </ResponsiveContainer>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Monthly Timeboxing Performance</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="h-[400px]">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <LineChart data={userPerformance.monthlyData}>
                                                <CartesianGrid strokeDasharray="3 3" />
                                                <XAxis dataKey="month" />
                                                <YAxis yAxisId="left" />
                                                <YAxis yAxisId="right" orientation="right" />
                                                <Tooltip />
                                                <Legend />
                                                <Line yAxisId="left" type="monotone" dataKey="timeboxScore" stroke="#8884d8" name="Timebox Score" />
                                                <Line yAxisId="right" type="monotone" dataKey="tasksCompleted" stroke="#82ca9d" name="Tasks Completed" />
                                                <Line yAxisId="right" type="monotone" dataKey="hours" stroke="#ffc658" name="Hours Worked" />
                                            </LineChart>
                                        </ResponsiveContainer>
                                    </div>
                                </CardContent>
                            </Card>
                        </CardContent>
                    </Card>
                )}
            </main>
        </div>
    )
}