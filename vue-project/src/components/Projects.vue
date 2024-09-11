<script setup>
import Project from './Project.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <Project imageUrl="../src/assets/logo.svg">
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Documentation</template>
  </Project>

  <Project>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Lorem ipsum dolor</template>
    <br />
  </Project>

  <Project>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Lorem ipsum</template>
  </Project>

  <Project>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Community</template>
  </Project>

  <Project>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Vue</template>
  </Project>
</template>
