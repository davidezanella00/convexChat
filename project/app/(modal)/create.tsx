import { View, Text, KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router';
import { useMutation } from 'convex/react';
import { api } from '../../convex/_generated/api'

const Page = () => {
    const [name, setName] = useState('');
    const [desc, setdesc] = useState('');
    const [icon, setIcon] = useState('');
    const router = useRouter();
    const startGroup = useMutation(api.groups.create);

    const onCreateGroup = async () => {
        await startGroup({
            name,
            description: desc,
            icon_url: icon
        });
        router.back()
    };
    return (
        <KeyboardAvoidingView style={styles.container}>
            <Text style={styles.label}>Name</Text>
            <TextInput style={styles.TextInput} value={name} onChangeText={setName}></TextInput>

            <Text style={styles.label}>Description</Text>
            <TextInput style={styles.TextInput} value={desc} onChangeText={setdesc}></TextInput>

            <Text style={styles.label}>Icon URL</Text>
            <TextInput style={styles.TextInput} value={icon} onChangeText={setIcon}></TextInput>

            <TouchableOpacity style={styles.button} onPress={onCreateGroup}>
                <Text style={styles.buttonText}>Create</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f8f5ea'
    },
    label: {
        marginVertical: 10,
    },
    TextInput: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        paddingHorizontal: 10,
        minHeight: 40,
        backgroundColor: '#fff'
    },
    button: {
        backgroundColor: '#EEA217',
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText : {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    }
})

export default Page