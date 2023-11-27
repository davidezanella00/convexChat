import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useQuery } from 'convex/react'
import { api } from '../convex/_generated/api';
import { Link } from 'expo-router';

const Page = () => {
    const groups = useQuery(api.groups.get) || [];
    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={styles.container}>
                {groups.map((group) => (
                    <Link href={{ pathname: '/(chat)/[chatid]', params: { chatid: group._id } }} key={group._id} asChild>
                        <TouchableOpacity style={styles.group}>
                            <Image source={{ uri: group.icon_url }} style={{ width: 50, height: 50 }} />
                            <View style={{ flex: 1 }}>
                                <Text>{group.name}</Text>
                                <Text style={{ color: '#888' }}>{group.description}</Text>
                            </View>
                        </TouchableOpacity>
                    </Link>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f8f5ea'
    },
    group: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22
    }
})

export default Page;