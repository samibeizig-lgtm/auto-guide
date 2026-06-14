<script setup lang="ts">
const route = useRoute()
await navigateTo(`/voitures-neuves/${route.params.id}`, { redirectCode: 301, replace: true })
</script>
