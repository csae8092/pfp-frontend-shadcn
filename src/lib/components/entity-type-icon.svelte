<script lang="ts">
import {  UserIcon, UsersIcon, MapIcon, BookOpenIcon, Database } from 'lucide-svelte';

const icons = {
    'user': UserIcon,
    'users': UsersIcon,
    'map': MapIcon,
    'book': BookOpenIcon,
    'dataset': Database
}

type EntityType = keyof typeof icons

interface Props {
    type: EntityType
    class?: string
}

let { type, ...rest }: Props = $props()

let Icon = $derived(icons[type])


</script>

<Icon {...rest} />