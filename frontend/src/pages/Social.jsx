import React from 'react'


const organizationRanks = [
    { id: 1, name: "Alice Johnson", points: 9500, avatar: "/placeholder.svg?height=32&width=32" },
    { id: 2, name: "Bob Smith", points: 9200, avatar: "/placeholder.svg?height=32&width=32" },
    { id: 3, name: "Charlie Brown", points: 8800, avatar: "/placeholder.svg?height=32&width=32" },
    { id: 4, name: "Current User", points: 8500, avatar: "/placeholder.svg?height=32&width=32", isCurrent: true },
    { id: 5, name: "David Lee", points: 8200, avatar: "/placeholder.svg?height=32&width=32" },
]

// Mock data for global ranks
const globalRanks = [
    { id: 1, name: "Jane Doe", points: 15000, avatar: "/placeholder.svg?height=32&width=32" },
    { id: 2, name: "John Smith", points: 14500, avatar: "/placeholder.svg?height=32&width=32" },
    { id: 3, name: "Emily Brown", points: 14000, avatar: "/placeholder.svg?height=32&width=32" },
    { id: 4, name: "Current User", points: 8500, avatar: "/placeholder.svg?height=32&width=32", isCurrent: true },
    { id: 5, name: "Michael Wang", points: 8000, avatar: "/placeholder.svg?height=32&width=32" },
]
const Social = () => {
    return (
        <Tabs defaultValue="organization" className="mb-6">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="organization">Organization</TabsTrigger>
                <TabsTrigger value="global">Global</TabsTrigger>
            </TabsList>
            <TabsContent value="organization">
                <LeaderboardComponent ranks={organizationRanks} title="Organization Leaderboard" icon={Building} />
            </TabsContent>
            <TabsContent value="global">
                <LeaderboardComponent ranks={globalRanks} title="Global Leaderboard" icon={Globe} />
            </TabsContent>
        </Tabs>
    )
}

export default Social