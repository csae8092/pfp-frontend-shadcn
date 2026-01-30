<script lang="ts">
import {  UserIcon, UsersIcon, MapIcon, BookOpenIcon, Database } from 'lucide-svelte';

const icons = {
    'persons': UserIcon,
    'groups': UsersIcon,
    'places': MapIcon,
    'works': BookOpenIcon,
    'datasets': Database
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